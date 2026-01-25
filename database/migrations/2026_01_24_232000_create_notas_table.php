<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('notas', function (Blueprint $table) {
            $table->uuid('nota_id')->primary();
            $table->string('descripcion');
            $table->timestamps();
            $table->uuid('mapa_cartografico_id');
            $table->foreign('mapa_cartografico_id')->references('mapa_cartografico_id')->on('mapas_cartograficos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notas');
    }
};
