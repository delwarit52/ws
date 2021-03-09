<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LogoModel extends Model
{
    use HasFactory;
    public $table="logo";
    public $primaryKey="logo_id";
    public $timestamps=false;
}
