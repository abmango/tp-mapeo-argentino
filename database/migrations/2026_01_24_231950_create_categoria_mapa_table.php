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
        Schema::create('categoria_mapa', function (Blueprint $table) {
            $table->uuid('mapa_id');
            $table->uuid('categoria_id');
            $table->timestamps();
            
            $table->foreign('mapa_id')->references('mapa_cartografico_id')->on('mapas_cartograficos')->onDelete('restrict');
            $table->foreign('categoria_id')->references('categoria_id')->on('categorias')->onDelete('restrict');

            $table->primary(['mapa_id', 'categoria_id']); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categoria_mapa');
    }
};
