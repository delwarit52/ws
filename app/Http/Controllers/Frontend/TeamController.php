<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\TeamModel;

class TeamController extends Controller
{
      public function teamlist(){

            $result=TeamModel::all();
            return $result;
     }
}
