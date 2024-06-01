<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('ticket_user', function (Blueprint $table) {

            $table->foreignId('ticket_id')->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->foreignId('user_id')->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->primary(['ticket_id', 'user_id']);

            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('ticket_user');
    }
};
