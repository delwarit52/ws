<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectSummaryModel extends Model
{
    use HasFactory;

    public $table="project_summary";
    public $primaryKey="project_summary_id";
    public $timestamps=false;
}
