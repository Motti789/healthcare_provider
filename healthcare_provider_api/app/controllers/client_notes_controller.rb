class ClientNotesController < ApplicationController
 before_action :set_client_note, only: %i[ show update destroy ]

  # GET /client_notes
  def index
    @client_notes = ClientNote.all

    render json: @client_notes
  end

  # GET /client_notes/1
  def show
    render json: @client_note
  end

  # POST /client_notes
  def create
     binding.pry
    @client_note = ClientNote.new(client_note_params)
   

    if @client_note.save
      render json: @client_note, status: :created, location: @client_note
    else
      render json: @client_note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /client_notes/1
  def update
    if @client_note.update(client_note_params)
      render json: @client_note
    else
      render json: @client_note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /client_notes/1
  def destroy
    @client_note.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client_note
      @client_note = ClientNote.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def client_note_params
      params.require(:client_note).permit(:notes)
      
    end
end
