# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/endpoint.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("google/api/endpoint.proto", :syntax => :proto3) do
    add_message "google.api.Endpoint" do
      optional :name, :string, 1
      repeated :aliases, :string, 2
      repeated :features, :string, 4
      optional :target, :string, 101
      optional :allow_cors, :bool, 5
    end
  end
end

module Google
  module Api
    Endpoint = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("google.api.Endpoint").msgclass
  end
end