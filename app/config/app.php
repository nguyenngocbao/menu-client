<?php

/**
 * @author Bao
 */
return [    
    'debug' => true,
    
    'sub_domain' => '',
    'view_static' => '',
    'path_log' => realpath(__DIR__ . '/../../') . '/logs/' . date('Y-m-d') . '.log',    
    'path_view' => realpath(__DIR__ . '/../../') . '/app/views/',
    
    'api' => [
        'url' => 'http://localhost:8777',
        'callee' => 'client-menu',
        'key' => 'client',
    ],
    'url' => [
        'owner' => 'http://localhost:8002',
        'base' => 'http://localhost:8000',
        'err' => 'http://localhost:8000',
    ]
];
