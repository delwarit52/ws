<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnalyticModel extends Model
{
    use HasFactory;
    public $table="analytic";
    public $primaryKey="analytic_id";
    public $timestamps=false;
}
