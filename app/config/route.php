<?php

/**
 * @author Bao
 */
use App\Controllers\IndexController;
use App\Controllers\store\StoreController;




return [

    ['GET', '/menu/[*:uuid]', [IndexController::class, 'index']],
    ['GET', '/store/[*:id]', [IndexController::class, 'index']],
    ['GET', '/sale/menu/[*:uuid]/[*:store_id]', [IndexController::class, 'menu']],
    ['GET', '/[*:uuid]', [IndexController::class, 'index']],
    ['POST', '/store/get-district', [StoreController::class, 'dictrict']],
    ['POST', '/store/get-ward', [StoreController::class, 'ward']],


];
