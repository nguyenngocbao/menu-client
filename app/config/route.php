<?php

/**
 * @author Bao
 */
use App\Controllers\IndexController;
use App\Controllers\store\StoreController;
use App\Controllers\store\MenuController;
use App\Controllers\store\ItemController;

return [
    ['POST', '/menu/update', [MenuController::class, 'update']],
    ['POST', '/menu/delete', [MenuController::class, 'delete']],
    ['POST', '/menu/get', [MenuController::class, 'get']],

    ['POST', '/item/update', [ItemController::class, 'update']],
    ['POST', '/item/delete', [ItemController::class, 'delete']],
    ['POST', '/item/get', [ItemController::class, 'get']],

    ['GET', '/store/[*:id]', [IndexController::class, 'index']],
    ['GET', '/sale/menu/[*:uuid]/[*:store_id]', [IndexController::class, 'menu']],

    ['POST', '/store/get-district', [StoreController::class, 'dictrict']],
    ['POST', '/store/get-ward', [StoreController::class, 'ward']],
    ['POST', '/store/update', [StoreController::class, 'update']],
    ['POST', '/store/insert', [StoreController::class, 'insert']],
    ['GET', '/menu/[*:uuid]', [IndexController::class, 'index']],
    ['GET', '/wellcome', [IndexController::class, 'wellcome']],
    ['GET', '/[*:uuid]', [IndexController::class, 'index']],




];
