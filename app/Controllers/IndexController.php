<?php

namespace App\Controllers;

class IndexController {

    private function _($uuid) {
        $res = call_api("/store/uuid",['uuid' => $uuid]);
        $store = [];
        $menu = [];
        if($res['err'] == 1){
            //redirect(url('sale/'.$uuid));
            $city = call_api("/store/city",[]);
            render_page_layout('sale/store', ['uuid' => $uuid,'city' => $city,],'_noheader_layout');
        }
        $store = $res['data']['store'];
        $menu = $res['data']['menus'];

        render_page_layout('menu/menu', ['uuid' => $uuid,'store' => $store,'menu' => $menu],'_noheader_layout');
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

        render_page_layout('sale/menu', ['store' => $store,'menu' => $menu],'_noheader_layout');

    }


}
