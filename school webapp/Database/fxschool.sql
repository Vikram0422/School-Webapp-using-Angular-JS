PGDMP     4                    {            fxschool    13.10    13.10 	    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16394    fxschool    DATABASE     l   CREATE DATABASE fxschool WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE fxschool;
                postgres    false            �            1259    16398 	   admission    TABLE     M  CREATE TABLE public.admission (
    admision_name character varying,
    mother_name character varying,
    gender character varying,
    mobile_number numeric,
    alt_mobile_number numeric,
    father_name character varying,
    dob character varying,
    email_id character varying,
    whatsapp_number character varying,
    aadhar_number character varying,
    address character varying,
    landmark character varying,
    city character varying,
    district character varying,
    state character varying,
    pincode character varying,
    community character varying,
    mother_occupation character varying,
    caste character varying,
    father_occupation character varying,
    family_income character varying,
    id integer NOT NULL,
    password character varying,
    religion character varying,
    role character varying
);
    DROP TABLE public.admission;
       public         heap    postgres    false            �            1259    16406    admission_sequence    SEQUENCE     {   CREATE SEQUENCE public.admission_sequence
    START WITH 2
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.admission_sequence;
       public          postgres    false            �          0    16398 	   admission 
   TABLE DATA           =  COPY public.admission (admision_name, mother_name, gender, mobile_number, alt_mobile_number, father_name, dob, email_id, whatsapp_number, aadhar_number, address, landmark, city, district, state, pincode, community, mother_occupation, caste, father_occupation, family_income, id, password, religion, role) FROM stdin;
    public          postgres    false    200   ,       �           0    0    admission_sequence    SEQUENCE SET     A   SELECT pg_catalog.setval('public.admission_sequence', 2, false);
          public          postgres    false    201            $           2606    16405    admission admission_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.admission
    ADD CONSTRAINT admission_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.admission DROP CONSTRAINT admission_pkey;
       public            postgres    false    200            �   %  x�E�Mn�0�׏S�D�'�d�t�U���`�6�ܾ�I���x���|��)Y?Y2X�D}j��E�z{Ah����R�U.��,>��Z��G!��!���(��;v�EY�R .��9A��#-��}z@�;g'��_�1�4yُ��܈ö�跅1��'�a�N(J��$%�S�����&x�
���*���i�S�f?&E�5�r�%>����B����%��0;¼D>�蕊���sTQ��)�*��j�H.�Njz�x��Ҥ<�NԳ1���G!P�Y8y��H�bv?fY�5|�     