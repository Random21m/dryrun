// Dependency analysis over a the original page script: top-level declarations and which top-level names each one references.
const acorn = require("acorn"), walk = require("acorn-walk");
// strict: count only names used as variables (not "x.name" properties or "{name: ...}" keys); the extractor keeps the wider
// count it was built with, the mutation run uses the strict one to find the code a test really runs
function topDecls(code, strict) {
  const ast = acorn.parse(code, { ecmaVersion: 2022, sourceType: "script", allowHashBang: true });
  const decls = []; // {names, start, end, refs:Set}
  for (const node of ast.body) {
    let names = [];
    if (node.type === "FunctionDeclaration" || node.type === "ClassDeclaration") names = [node.id.name];
    else if (node.type === "VariableDeclaration") for (const d of node.declarations) collectPat(d.id, names);
    const refs = new Set();
    if (!strict) walk.full(node, (n) => { if (n.type === "Identifier") refs.add(n.name); });
    else walk.fullAncestor(node, (n, anc) => {
      if (n.type !== "Identifier") return; const p = anc[anc.length - 2];
      if (p && p.type === "MemberExpression" && p.property === n && !p.computed) return;
      if (p && (p.type === "Property" || p.type === "MethodDefinition" || p.type === "PropertyDefinition") && p.key === n && !p.computed && !(p.type === "Property" && p.shorthand)) return;
      refs.add(n.name);
    });
    decls.push({ names, start: node.start, end: node.end, refs, type: node.type });
  }
  return { ast, decls };
}
function collectPat(p, out) {
  if (!p) return;
  if (p.type === "Identifier") out.push(p.name);
  else if (p.type === "ObjectPattern") p.properties.forEach((q) => collectPat(q.value || q.argument, out));
  else if (p.type === "ArrayPattern") p.elements.forEach((q) => collectPat(q, out));
  else if (p.type === "AssignmentPattern") collectPat(p.left, out);
  else if (p.type === "RestElement") collectPat(p.argument, out);
}
function idents(code) {
  const ast = acorn.parse(code, { ecmaVersion: 2022, sourceType: "script" });
  const s = new Set(); walk.full(ast, (n) => { if (n.type === "Identifier") s.add(n.name); }); return s;
}
module.exports = { topDecls, idents };
