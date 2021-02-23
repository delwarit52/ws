<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\AboutModel;

class AboutController extends Controller
{
    public function about(){

             $result=AboutModel::all();
            return $result;

         }

}
