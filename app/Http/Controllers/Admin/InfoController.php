<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\InfoModel;

class InfoController extends Controller
{
    public function getInfo(){
        $result=InfoModel::all();
        return $result;
    }
}
