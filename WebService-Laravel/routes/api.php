<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/carros', function() {

  $carros = App\Carro::all();
  foreach ($carros as $item) {
    # code...
    $item->valor_formatado = number_format($item->valor,2,',','.');
    $item->galerias;
    $item->categorias;
    $item->marca;
  }
  return $carros;

});
