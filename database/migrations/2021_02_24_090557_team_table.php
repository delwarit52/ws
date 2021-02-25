<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TeamTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team', function (Blueprint $table) {

                       $table->bigIncrements('team_id');
                        $table->string('name');
                        $table->string('title');
                        $table->string('facebook');
                        $table->string('twitter');
                        $table->string('linkdin');
                        $table->string('email');
                        $table->text('image');
                        $table->timestamps();

                    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('team');
    }
}
