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
}
