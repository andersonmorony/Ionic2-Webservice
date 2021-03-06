<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Galeria extends Model
{
  protected $fillable = [
      'titulo', 'descricao', 'url', 'ordem'
  ];

  public function Carro()
  {
    return $this->belongsTo('App\Carro');
  }
}
