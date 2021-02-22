<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('info', function (Blueprint $table) {
                     $table->id('info_id');
                     $table->string('mobile');
                     $table->string('address_short');
                     $table->string('email');
                     $table->string('fb_page');
                     $table->string('opening_time');
                     $table->string('address_long');
                    $table->timestamp('created_at')->nullable();
                });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('info');
    }
}
