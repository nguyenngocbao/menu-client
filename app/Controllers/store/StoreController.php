<?php

namespace App\Controllers\store;

class StoreController
{
    public function updateAction(){
        $post = post();

        $data = call_api("/store/update",$post);

        echo_json($data);

    }


    public function dictrictAction(){
        $data = [];
        if ($id = post_int('id')){
            $data = call_api("/store/district",['id' => $id]);
        }
        echo_json_success($data);

    }

    public function wardAction(){
        $data = [];
        if ($id = post_int('id')){
            $data = call_api("/store/ward",['id' => $id]);
        }
        echo_json_success($data);

    }


}