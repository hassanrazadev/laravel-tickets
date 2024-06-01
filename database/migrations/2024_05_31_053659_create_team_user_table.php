<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('team_user', function (Blueprint $table) {

            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('team_id')->constrained('teams');
            $table->primary(['user_id', 'team_id']);

            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('team_user');
    }
};
