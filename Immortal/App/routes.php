<?php
use Immortal\Route;
use Immortal\View;

Route::set('/', 'Home@index');

Route::set('test/:id/:?name', function ($id = 13, $name = 'javed') {
    $data = ['id' => $id, 'name' => $name];

    return View::make('index.twig', $data);
});
