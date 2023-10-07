<?php

namespace App\Controllers;

class IndexController {

    private function _($uuid) {
        $res = call_api("/store/uuid",['uuid' => $uuid]);
        //echo_json($res);
        $store = [];
        $menu = [];
        if($res['err'] == 1){
            $city = call_api("/store/city",[]);
            render_page('sale/store', ['uuid' => $uuid,'city' => $city]);
        }
        $store = $res['data']['store'];
        $menu = $res['data']['menus'];

        render_page('menu/menu', ['uuid' => $uuid,'store' => $store,'menu' => $menu]);
    }

    public function indexAction($uuid) {
        $this->_($uuid);
    }

    public function menuAction($uuid,$store_id){

        $res = call_api("/store/get",['id' => $store_id]);

        $store = [];
        $menu = [];
        if($res['err'] == 1){
            redirect(url('/'.$uuid));
        }
        $store = $res['data']['store'];
        $menu = $res['data']['menus'];

        render_page('sale/menu', ['uuid' => $uuid,'store' => $store,'menu' => $menu]);

    }


}
