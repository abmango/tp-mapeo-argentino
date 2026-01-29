<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use App\Models\MapaCartografico;

class Region extends Model
{
    use HasUuids;

    protected $fillable = ['nombre'];

    public function mapasCartograficos()
    {
        return $this->hasMany(MapaCartografico::class);
    }
}
