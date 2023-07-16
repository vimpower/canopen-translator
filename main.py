from scripts.cobid import translateCOBID
from scripts.logreader import Parser
import sys

if __name__ == '__main__':
    print("###Can calculator###")
    parser = Parser(sys.stdin)
    for line, frame in parser.iterlines(keep_unknowns=True):
        if frame is not None:
            translateCOBID("0x" + str(frame.frame_id))
            print(frame.data)