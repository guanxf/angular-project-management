<?php
$data = array(
	array(
		"id" => 1,
		"username" => "成员1",
		"telephone" => "18611948745",
		"password" => "38385438",
		"sex" => '男',
		"info" => "前端工程师"
	),
	array(
		"id" => 2,
		"username" => "成员2",
		"telephone" => "18611948745",
		"password" => "38385438",
		"sex" => '男',
		"info" => "ui设计师"
	),
	array(
		"id" => 3,
		"username" => "成员3",
		"telephone" => "18611948745",
		"password" => "38385438",
		"sex" => '男',
		"info" => "后台哥哥"
	),
	array(
		"id" => 4,
		"username" => "成员4",
		"telephone" => "18611948745",
		"password" => "38385438",
		"sex" => '男',
		"info" => "产品经理"
	),
	array(
		"id" => 5,
		"username" => "成员5",
		"telephone" => "18611948745",
		"password" => "38385438",
		"sex" => '男',
		"info" => "部门经理"
	)
);
$result = array(
	"errno" => 0,
	"data" => $data
);
echo json_encode($result);