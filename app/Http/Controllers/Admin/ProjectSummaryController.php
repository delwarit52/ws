<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\ProjectSummaryModel;
use Illuminate\Http\Request;

class ProjectSummaryController extends Controller
{
    public function projectSummary()
    {
        $result = ProjectSummaryModel::all();
        return $result;
    }

    public function editProjectSummaryCat(Request $request){
        $id=$request->id;
        $result=ProjectSummaryModel::where('project_summary_id', $id)->get();
        return $result;
    }

    public function updateProjectSummary(Request $request){

        $project_summary_id=$request->input('project_summary_id');
        $title=$request->input('title');
        $total=$request->input('total');

        $result=ProjectSummaryModel::where('project_summary_id', $project_summary_id)->update([
            'title'=>$title,
            'total'=>$total
        ]);
        return $result;
    }
}
