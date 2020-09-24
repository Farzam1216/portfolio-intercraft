<?php

namespace App\Http\Controllers;

use App\Fish;

use Illuminate\Http\Request;

class FishController extends Controller
{
    public function index()
    {
      return view('site.index');   
    }

    public function get(Request $request)
    {
        $posts = Fish::all();
        return response()->json($posts);
    }

    public function store(Request $request)
    {
        $post = Fish::create($request->all());

        return response()->json($post);
    }

    public function delete($id)
    {
        Fish::destroy($id);

        return response()->json("ok");
    }

}
