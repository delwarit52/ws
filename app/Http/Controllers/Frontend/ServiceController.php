<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\ServiceModel;

class ServiceController extends Controller
{
      public function service(){
                   $result=ServiceModel::all();
                   return $result;
             }
}
