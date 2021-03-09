<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\TeamModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeamController extends Controller
{
    public function team(){
        $result=TeamModel::all();
        return $result;
    }

    public function editTeam(Request $request){
        $id=$request->id;
        $result=DB::table('team')->where('team_id', $id)->get();
        return $result;
    }



    public function addTeam(Request $request){

        $name=$request->input('name');
        $title=$request->input('title');
        $facebook=$request->input('facebook');
        $twitter=$request->input('twitter');
        $linkdin=$request->input('linkdin');
        $email=$request->input('email');


        $image=$request->file('img')->store('public/uploads/team');

        $imgName=explode("/",$image)[3];

        $result=TeamModel::insert([
            'name'=>$name,
            'title'=>$title,
            'facebook'=>$facebook,
            'twitter'=>$twitter,
            'linkdin'=>$linkdin,
            'email'=>$email,
            'image'=>$imgName
        ]);
        return $result;
    }




    public function updateTeam(Request $request){
        $team_id=$request->input('team_id');
        $name=$request->input('name');
        $title=$request->input('title');
        $facebook=$request->input('facebook');
        $twitter=$request->input('twitter');
        $linkdin=$request->input('linkdin');
        $email=$request->input('email');

        $result=TeamModel::where('team_id', $team_id)->update([
            'name'=>$name,
            'title'=>$title,
            'facebook'=>$facebook,
            'twitter'=>$twitter,
            'linkdin'=>$linkdin,
            'email'=>$email,
        ]);
        return $result;
    }


    public function updateTeamWithImg(Request $request){
        $team_id=$request->input('team_id');
        $name=$request->input('name');
        $title=$request->input('title');
        $facebook=$request->input('facebook');
        $twitter=$request->input('twitter');
        $linkdin=$request->input('linkdin');
        $email=$request->input('email');
        $image=$request->file('img')->store('public/uploads/team');

        $imgName=explode("/",$image)[3];

        $result=TeamModel::where('team_id', $team_id)->update([
            'name'=>$name,
            'title'=>$title,
            'facebook'=>$facebook,
            'twitter'=>$twitter,
            'linkdin'=>$linkdin,
            'email'=>$email,
            'image'=>$imgName
        ]);
        return $result;
    }




    public function teamDelete(Request $request){
        $id=$request->id;
        $result=DB::table('team')->where('team_id', $id)->delete();
        return $result;
    }



}
