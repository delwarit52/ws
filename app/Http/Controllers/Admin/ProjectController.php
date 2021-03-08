<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\ProjectModel;
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

    public function editProject(Request $request){
        $id=$request->id;
        $result=ProjectModel::where('project_id', $id)->get();
        return $result;
    }



    public function addProject(Request $request){
        $project_cat_id=$request->input('project_cat_id');
        $title=$request->input('title');
        $url=$request->input('url');
        $detail=$request->input('detail');


        $image=$request->file('img')->store('public/uploads/project');

        $imgName=explode("/",$image)[3];


        $result=ProjectModel::insert([
            'project_title'=>$title,
            'url'=>$url,
            'project_cat_id'=>$project_cat_id,
            'detail'=>$detail,
            'image'=>$imgName
        ]);
        return $result;
    }


    public function updateProject(Request $request){
        $project_id=$request->input('project_id');
        $project_cat_id=$request->input('project_cat_id');
        $title=$request->input('title');
        $url=$request->input('url');
        $detail=$request->input('detail');



        $result=ProjectModel::where('project_id', $project_id)->update([
            'project_title'=>$title,
            'url'=>$url,
            'project_cat_id'=>$project_cat_id,
            'detail'=>$detail,
        ]);
        return $result;
    }


    public function updateProjectWithImg(Request $request){
        $project_id=$request->input('project_id');
        $project_cat_id=$request->input('project_cat_id');
        $title=$request->input('title');
        $url=$request->input('url');
        $detail=$request->input('detail');

        $image=$request->file('img')->store('public/uploads/project');

        $imgName=explode("/",$image)[3];

        $result=ProjectModel::where('project_id', $project_id)->update([
            'project_title'=>$title,
            'url'=>$url,
            'project_cat_id'=>$project_cat_id,
            'detail'=>$detail,
            'image'=>$imgName
        ]);
        return $result;
    }


    public function deleteProject(Request $request){
        $id=$request->id;
        $result=ProjectModel::where('project_id', $id)->delete();
        return $result;
    }




}
