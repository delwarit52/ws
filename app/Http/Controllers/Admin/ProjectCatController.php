<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\ProjectCatModel;
use App\Models\Admin\ProjectSummaryModel;
use Illuminate\Http\Request;

class ProjectCatController extends Controller
{
    public function cat(){
        $result=ProjectCatModel::all();
        return $result;
    }
    public function editCat(Request $request){
        $id=$request->id;
        $result=ProjectCatModel::where('project_cat_id', $id)->get();
        return $result;
    }

    public function updateProjectCat(Request $request){

        $project_cat_id=$request->input('project_cat_id');
        $title=$request->input('title');

        $result=ProjectCatModel::where('project_cat_id', $project_cat_id)->update([
            'title'=>$title,
        ]);
        return $result;
    }

    public function projectCatDelete(Request $request){
        $id=$request->id;
        $result=ProjectCatModel::where('project_cat_id', $id)->delete();
        return $result;
    }

}
