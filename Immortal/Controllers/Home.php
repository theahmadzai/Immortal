<?php
namespace App\Controllers;

use Immortal\View;

class Home extends Controller
{
    public function index()
    {
        return View::make('index.twig', ['name' => 'Javed']);
    }
}
