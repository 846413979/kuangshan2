<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2019 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 小夏 < 449134904@qq.com>
// +----------------------------------------------------------------------
namespace app\portal\validate;

use app\admin\model\RouteModel;
use think\Validate;

class ProductValidate extends Validate
{
    protected $rule = [
        'category_id' => 'require',
        'title' => 'require',
        'list_order' => 'integer',
//        'min_lifting_height' => 'require',
        'max_lifting_height' => 'require|gt:0',
//        'lifting_height_interval'=>'require',
//        'min_span' => 'require',
//        'max_span' => 'require|gt:min_span',
//        'span_interval'=>'require',
    ];
    protected $message = [
        'category_id.require' => '请指定分类',
        'name.require' => '标题不能为空',
        'list_order.integer' => '排序不能为空',
        'max_lifting_height.require' => '最大起重高度不能为空',
        'max_lifting_height.gt' => '最大起重高度必须大于0',
        'max_span.gt' => '最大跨度必须大于最小跨度',
    ];

}