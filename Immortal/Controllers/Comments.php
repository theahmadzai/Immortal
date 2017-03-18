<?php
namespace App\Controllers;

use Immortal\View;

class Comments extends Controller
{
    public function index($id = 10, $name = 'Comments')
    {
        return View::make('index.twig', ['id' => $id, 'name' => $name]);
    }
}
