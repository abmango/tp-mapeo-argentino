<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use App\Enums\RegionArgentina;

class Region extends Model
{
    use HasUuids;

    protected $fillable = ['nombre'];

    protected $casts = [
        'nombre' => RegionArgentina::class,
    ];

    public function mapasCartograficos()
    {
        return $this->hasMany(MapaCartografico::class);
    }
}
