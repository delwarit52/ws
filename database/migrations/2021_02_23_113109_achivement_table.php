<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AchivementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('achivement', function (Blueprint $table) {
                                    $table->bigIncrements('achivement_id');
                                    $table->string('title');
                                    $table->text('detail');

                                    $table->text('video');
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
          Schema::dropIfExists('achivement');
    }
}
