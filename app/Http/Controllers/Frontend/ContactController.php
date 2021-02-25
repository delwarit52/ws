<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\InfoModel;

class ContactController extends Controller
{
     public function contacts(){

                $result=InfoModel::all();
                return $result;
         }
}
