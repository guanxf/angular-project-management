<?php
$data = array(
	"id" => 1,
	"username" => "成员",
	"telephone" => "18611948745",
	"password" => "38385438",
	"sex" => '男',
	"info" => "这是新成员"
);
$result = array(
	"errno" => 0,
	"data" => $data
);
echo json_encode($result);