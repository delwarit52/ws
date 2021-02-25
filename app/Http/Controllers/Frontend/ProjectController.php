<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin\ProjectModel;
use App\Models\Admin\ProjectCatModel;
use DB;

class ProjectController extends Controller
{
    public function projectCat(){
                           $result=ProjectCatModel::all();
                           return $result;
                     }

                         public function projectlist(){
                                                $result=ProjectModel::all();
                                                return $result;
                                          }

                                          public function catProject(Request $request){

                                                                                 $id =$request->id;

                                                                                 $result=DB::table('project')->where('project_cat_id', $id)->get();

                                                                                 return $result;

                                                                              }




}
