const buildTree = (nodes, parentId = 0) => {
	const tree = [];
	nodes.forEach((node) => {
		if (node.parent_id === parentId) {
			const children = buildTree(nodes, node.id);
			if (children.length) {
				node.children = children;
			}
			tree.push(node);
		}
	});
	return tree;
};

module.exports = buildTree;
