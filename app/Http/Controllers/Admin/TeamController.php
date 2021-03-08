<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\TeamModel;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function team(){
        $result=TeamModel::all();
        return $result;
    }
}
