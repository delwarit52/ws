<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    public function project(){

        $result = DB::table('project')
            ->join('project_cat', 'project_cat.project_cat_id', '=', 'project.project_cat_id')
            ->select('project.*', 'project_cat.title')
            ->get();
        return $result;
    }
}
