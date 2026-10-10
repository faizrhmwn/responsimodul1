import { supabase } from "../config/supabaseClient.js";

export const BookModel = {
  async getAll() {
    const { data, error } = await supabase.from("books").select("*");
    if (error) throw error;
    return data;
  },
  async create(payload) {
    const { data, error } = await supabase.from("books").insert([payload]).select().single();
    if (error) throw error;
    return data;
  }
};