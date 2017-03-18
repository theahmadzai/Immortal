<?php
namespace App\Controllers;

use App\Models\Math;
use Immortal\View;

class User extends Controller
{
    public function index()
    {
        return View::make('index.twig', ['welcome']);
    }

    public function name($name)
    {
        $sum = new Math(3, 3);

        return View::make('index.twig', [$sum]);
    }
}
