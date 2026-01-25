<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use App\Models\MapaCartografico;

class Nota extends Model
{
    use HasUuids;

    protected $fillable = ['descripcion'];

    public function mapaCartografico()
    {
        return $this->belongsTo(MapaCartografico::class);
    }
}
