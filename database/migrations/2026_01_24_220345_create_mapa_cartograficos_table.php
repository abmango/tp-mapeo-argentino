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
        
        Schema::create('mapas_cartograficos', function (Blueprint $table) {
            $table->uuid('mapa_cartografico_id')->primary();
            $table->string('nombre');
            $table->text('descripcion');
            $table->string('imagen');
            
            // Claves foráneas
            $table->uuid('categoria_id');
            $table->string('region_id');

            $table->date('fecha_inicio');
            $table->date('fecha_fin');
            $table->string('url_imagen');

            $table->timestamps();

            // Relaciones
            $table->foreign('categoria_id')->references('categoria_id')->on('categorias')->onDelete('restrict');
            $table->foreignUuid('creador_id')->constrained('users')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('MapaCartografico');
    }
};
