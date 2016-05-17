$(function(){
	var defaultData = [{
		text: 'Parent 1',
		nodes: [{
			text: 'Child 1',
			nodes: [{
				text: 'Grandchild 1'
			}, {
				text: 'Grandchild 2'
			}]
		}, {
			text: 'Child 2',						// 挂到节点上text
			icon: 'glyphicon glyphicon-earphone',	// 挂到节点上icon	
			href: '#demo',							// 挂到节点上的链接属性
			tags: ['0']								// 挂到节点数
		}]
	}, {
		text: 'Parent 2'
	}, {
		text: 'Parent 3'
	}, {
		text: 'Parent 4'
	}, {
		text: 'Parent 5'
	}, {
		text: 'Parent 6',
		nodes: [{
			text: 'Child 1',
			nodes: [{
				text: 'Grandchild 1'
			}, {
				text: 'Grandchild 2'
			}]
		}]
	}];
	
	// 初始化
	var $searchableTree = $('#treeview-searchable').treeview({
		data: defaultData,
		//multiSelect: true,	// 是否可以多选
		onNodeSelected: function(event, node) {
			console.log(node);
			$('#h2').html(node.text);
		},
		onNodeUnselected: function (event, node) {
			console.log(node);
			$('#h2').html(node.text);
		}
	});
	var search = function(e, options) {
		var pattern = $('#input-search').val();
		var results = $searchableTree.treeview('search', [pattern, options]);
		var output = '<p>' + results.length + ' matches found</p>';
		$.each(results, function(index, result) {
			output += '<p>- ' + result.text + '</p>';
		});
	}
	
	// 搜索操作的相关绑定
	$('#btn-search').on('click', search);
	$('#input-search').on('keyup', function(e){
		var options = {
			revealResults: false		// 控制菜单会不会跟随搜索展开
		};
		search(e, options);
	});
	$('#btn-clear-search').on('click', function(e) {
		$searchableTree.treeview('clearSearch');
		$('#input-search').val('');
		$('#search-output').html('');
	});
	
	// 全部展开
	$('#btn-expand-all').click(function (e) {
		var levels = $('#select-expand-all-levels').val();
		$searchableTree.treeview('expandAll');
	});

	// 全部收起
	$('#btn-collapse-all').click(function (e) {
		$searchableTree.treeview('collapseAll');
	});
	
	// 定级展开
	$('#btn-expand-level').click(function(){
		$searchableTree.treeview('expandAll', {levels:['2']}); // 0\1\2
	});
	
	// 定级收起	不好用！
	$('#btn-collapse-level').click(function(){
		$searchableTree.treeview('collapseAll', {levels:['2']});
	});
	
	// 某项展开
	$('#btn-expand-this').click(function (e) {
		$searchableTree.treeview('search', ['child', {evels:['1']}]);		// 设置查找层级为第2级 	不好用！
	});
	
	// 某项收起	不好用！
	$('#btn-collapse-this').click(function(){
		$searchableTree.treeview('collapseAll', ['dc']);
	});
	
	/*
	// 选中节点
	$('#btn-select-node').click(function (e) {
		$searchableTree.treeview('selectNode', ['child', {evels:['1']}]);
	});
	// 取消选中
	$('#btn-unselect-node').click(function (e) {
		$searchableTree.treeview('unselectNode', [ selectableNodes, { silent: $('#chk-select-silent').is(':checked') }]);
	});
	// toggle节点
	$('#btn-toggle-selected').click(function (e) {
		$searchableTree.treeview('toggleNodeSelected', [ selectableNodes, { silent: $('#chk-select-silent').is(':checked') }]);
	});
	*/
});