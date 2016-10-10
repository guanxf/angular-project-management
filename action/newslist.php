<?php
$data = array(
	array(
		"id" => 1,
		"title" => "内部消息通知1",
		"writer" => "管理员",
		"date" => 1455808822088,
		"content" => "公司最新消息通知1"
	),
	array(
		"id" => 2,
		"title" => "内部消息通知2",
		"writer" => "管理员",
		"date" => 1455808822088,
		"content" => "公司最新消息通知2"
	),
	array(
		"id" => 3,
		"title" => "内部消息通知3",
		"writer" => "管理员",
		"date" => 1455808822088,
		"content" => "公司最新消息通知3"
	),
	array(
		"id" => 4,
		"title" => "内部消息通知4",
		"writer" => "管理员",
		"date" => 1455808822088,
		"content" => "公司最新消息通知4"
	),
	array(
		"id" => 5,
		"title" => "内部消息通知5",
		"writer" => "管理员",
		"date" => 1455808822088,
		"content" => "公司最新消息通知5"
	)
);
$result = array(
	"errno" => 0,
	"data" => $data
);
echo json_encode($result);