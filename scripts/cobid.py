def getCommunicationObject(can_id_number : int):
    if can_id_number < 0:
        return "Invalid"
    elif can_id_number < 1:
        return "NMT"
    elif can_id_number < 128:
        return "Not mapped (for future use)"
    elif can_id_number < 129:
        return "SYNC"
    elif can_id_number < 256:
        return "EMCY"
    elif can_id_number < 257:
        return "TIME"
    elif can_id_number < 385:
        return "Not mapped (for future use)"
    elif can_id_number < 512:
        return "Transmit PDO 1"
    elif can_id_number < 513:
        return "Not mapped (for future use)"
    elif can_id_number < 640:
        return "Receive PDO 1"
    elif can_id_number < 641:
        return "Not mapped (for future use)"
    elif can_id_number < 768:
        return "Transmit PDO 2"
    elif can_id_number < 769:
        return "Not mapped (for future use)"
    elif can_id_number < 896:
        return "Receive PDO 2"
    elif can_id_number < 897:
        return "Not mapped (for future use)"
    elif can_id_number < 1024:
        return "Transmit PDO 3"
    elif can_id_number < 1025:
        return "Not mapped (for future use)"
    elif can_id_number < 1152:
        return "Receive PDO 3"
    elif can_id_number < 1153:
        return "Not mapped (for future use)"
    elif can_id_number < 1280:
        return "Transmit PDO 4"
    elif can_id_number < 1281:
        return "Not mapped (for future use)"
    elif can_id_number < 1408:
        return "Receive PDO 4"
    elif can_id_number < 1409:
        return "Not mapped (for future use)"
    elif can_id_number < 1536:
        return "Transmit PDO 4"
    elif can_id_number < 1537:
        return "Not mapped (for future use)"
    elif can_id_number < 1694:
        return "Receive PDO 4"
    elif can_id_number < 1793:
        return "Not mapped (for future use)"
    elif can_id_number < 1920:
        return "HEARTBEAT"
    else:
        return "Not mapped (for future use)"
    


def translateCOBID(can_id_hex : str):
    can_id_number = int(can_id_hex, 16)
    can_id_dec = str(can_id_number)
    can_id_bin = bin(can_id_number)[2:]


    
    # Zero padding
    while(len(can_id_bin) < 11):
        can_id_bin = '0' + can_id_bin
    
    function_code = can_id_bin[:4]
    node_id_bin = can_id_bin[4:]
    node_id_hex = hex(int(node_id_bin, 2)) 
    node_id_dec = str(int(node_id_bin, 2)) 

    if(len(can_id_bin) != 11):
        print("[Error] bad CAN_ID")
    elif(len(can_id_bin) < 0):
        print("[Error] negative CAN_ID")
    else:
        # print("COB-ID (DEC):", can_id_dec)
        # print("COB-ID (BIN):", can_id_bin)
        # print("Number of bits:", len(can_id_bin))
        # print("Function-code: ", function_code) 
        # print("Node ID [bin]: ", node_id_bin)
        # print("Node ID [hex]: ", node_id_hex)
        print("Node ID [dec]: ", node_id_dec)
        print("Communication Object: ", getCommunicationObject(can_id_number))


    



